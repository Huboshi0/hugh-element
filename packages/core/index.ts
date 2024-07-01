import { makeInstaller } from "@hugh-element/utils";
import components from "./components";
import '@hugh-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@hugh-element/components";
export default installer;