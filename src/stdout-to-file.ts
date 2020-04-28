import childProcess from "child_process";
import fs from "fs";
import path from "path";

/**
 * main function
 * @param argv commandline arguments
 */
function main(argv: string[]): void
{
	if(argv.length < 3)
	{
		console.error(`USAGE: ${argv[0]} FILE_TO_OUTPUT COMMAND [ARG...]`);
		process.exit(1);
	}

	const [, outFile, command, ...args] = argv;
	createDir(outFile);
	const writeStream = fs.createWriteStream(outFile);
	writeStream
		.on("open", () =>
		{
			childProcess.spawn(command, args, {
				stdio: ["inherit", writeStream, "inherit"],
			});
		});
}

/**
 * create directory recursive
 * @param pathName patn name including file
 */
function createDir(pathName: string): void
{
	const dirName = path.dirname(pathName);
	if(existsDir(dirName))
	{
		return;
	}

	fs.mkdirSync(dirName, {
		recursive: true,
	});
}

/**
 * is directory exists?
 * @param dirName directory to check
 * @returns Yes/No
 */
function existsDir(dirName: string): boolean
{
	try
	{
		const stat = fs.statSync(dirName);
		return stat.isDirectory();
	}
	catch(err)
	{
		return false;
	}
}

main(process.argv.slice(1));
