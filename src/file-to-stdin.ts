import childProcess from "child_process";
import fs from "fs";

/**
 * main function
 * @param argv commandline arguments
 */
function main(argv: string[]): void
{
	if(argv.length < 3)
	{
		console.error(`USAGE: ${argv[0]} FILE_TO_INPUT COMMAND [ARG...]`);
		process.exit(1);
	}

	const [, inFile, command, ...args] = argv;
	const readStream = fs.createReadStream(inFile);
	readStream
		.on("open", () =>
		{
			const pr = childProcess.spawn(command, args, {
				stdio: [readStream, "inherit", "pipe"], // [readStream, "inherit", "inherit"] not works...
			});
			pr.stderr
				.on("data", (data) =>
				{
					process.stderr.write(data);
				});
		});
}

main(process.argv.slice(1));
