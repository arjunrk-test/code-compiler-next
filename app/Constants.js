export const Language_Versions = {
   "bash" : "5.2.0",
   "c" : "10.2.0",
   "cpp" : "10.2.0",
   "csharp" : "6.12.0",
   "java" : "15.0.2",
   "javascript" : "18.15.0",
   "kotlin" : "1.8.20",
   "perl" : "5.36.0",
   "php" : "8.2.3",
   "python" : "3.10.0",
   "ruby" : "3.0.1",
   "rust" : "1.68.2",
   "swift" : "5.3.3",
   "typescript" : "5.0.3",
};



export const Code_Snippets = {
   bash: `\n#!/bin/bash\nname="Alex"\necho "Hello, $name!"\n`,
   c: `\n#include <stdio.h>\n\nint main() {\n\tchar name[] = "Alex";\n\tprintf("Hello, %s!\\n", name);\n\treturn 0;\n}\n`,
   cpp: `\n#include <iostream>\n\nint main() {\n\tstd::string name = "Alex";\n\tstd::cout << "Hello, " << name << "!" << std::endl;\n\treturn 0;\n}\n`,
   csharp: `\nusing System;\n\nclass Program {\n\tstatic void Main() {\n\t\tstring name = "Alex";\n\t\tConsole.WriteLine($"Hello, {name}!");\n\t}\n}\n`,
   java: `\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tString name = "Alex";\n\t\tSystem.out.println("Hello, " + name + "!");\n\t}\n}\n`,
   javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
   kotlin: `\nfun greet(name: String) {\n\tprintln("Hello, $name!")\n}\n\ngreet("Alex")\n`,
   perl: `\nsub greet {\n\tmy $name = shift;\n\tprint "Hello, $name!\\n";\n}\n\ngreet("Alex");\n`,
   php: `\n<?php\nfunction greet($name) {\n\techo "Hello, " . $name . "!";\n}\n\ngreet("Alex");\n?>\n`,
   python: `\ndef greet(name):\n\tprint(f"Hello, {name}!")\n\ngreet("Alex")\n`,
   ruby: `\ndef greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Alex")\n`,
   rust: `\nfn greet(name: &str) {\n\tprintln!("Hello, {}!", name);\n}\n\ngreet("Alex");\n`,
   swift: `\nfunc greet(name: String) {\n\tprint("Hello, \(name)!")\n}\n\ngreet("Alex")\n`,
   typescript: `\nfunction greet(name: string): void {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
 };
 