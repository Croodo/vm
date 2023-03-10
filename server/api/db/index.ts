
import mongoose from "mongoose";
import { Nitro } from "nitropack";

// Nitro plugin
// Thanks to https://github.com/UnderKoen for the answer to this
// https://github.com/nuxt/framework/discussions/4923
export default async (_nitroApp: Nitro) => {
	//run your connect code here
	const config = useRuntimeConfig();
	// connect to mongodb
	mongoose
		.connect("mongodb+srv://lookpretty:goldenbird@cluster0.xpjzhvi.mongodb.net/blog?retryWrites=true&w=majority")
		.then(() => console.log(`Connected to DB`))
		.catch((e) => console.log(e));
};