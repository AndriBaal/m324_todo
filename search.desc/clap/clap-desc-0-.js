searchState.loadedDescShard("clap", 0, "<strong>Command Line Argument Parser for Rust</strong>\nEnables colored output regardless of whether or not the …\nAny existing path.\nWhen encountered, store the associated value(s) in …\nThe abstract representation of a command line argument. …\nBehavior of arguments when they are encountered while …\nFamily of related arguments.\nContainer for parse results.\nParse a set of arguments into a user-defined container.\nEnables colored output only when the output is going to a …\nRepresents the color preferences for program output\nBuild a command-line interface.\nCreate a <code>Command</code> relevant for a user-defined container.\nName of a command, without arguments. May be relative to …\nA single string containing a command and its arguments.\nCapture the remaining arguments as a command name and …\nWhen encountered, increment a <code>u8</code> counter starting from <code>0</code>.\nPath to a directory.\nEmail address.\nCommand Line Argument Parser Error\nPath to an executable file.\nPath to a file.\nConverts an instance of <code>ArgMatches</code> to a user-defined …\nWhen encountered, display <code>Command::print_help</code>\nWhen encountered, display <code>Command::print_long_help</code>\nWhen encountered, display <code>Command::print_help</code>\nHost name of a computer. Shells usually parse <code>/etc/hosts</code> …\n<code>Arg</code> or <code>ArgGroup</code> identifier\nDisables colored output no matter if the output is going …\nNone of the hints below apply. Disables shell completion …\nParse command-line arguments into <code>Self</code>.\nWhen encountered, store the associated value(s) in …\nWhen encountered, act as if <code>&quot;false&quot;</code> was encountered on the …\nWhen encountered, act as if <code>&quot;true&quot;</code> was encountered on the …\nParse a sub-command into a user-defined enum.\nDefault value if hint is not specified. Follows shell …\nComplete web address.\nName of a local operating system user.\nParse arguments into enums.\nProvide shell with hint on how to complete an argument.\nWhen encountered, display <code>Command::version</code>\nSets the program’s description for the short help (<code>-h</code>).\nSpecify how to react to an argument when parsing it.\nFree-form help text for after auto-generated short help (<code>-h</code>…\nFree-form help text for after auto-generated long help (…\nAdd an alias, which functions as a hidden long flag.\nSets a hidden alias to this subcommand.\nAdd aliases, which function as hidden long flags.\nSets multiple hidden aliases to this subcommand.\nAssume unexpected positional arguments are a <code>subcommand</code>.\nAllows values which start with a leading hyphen (<code>-</code>)\nAllows one to implement two styles of CLIs where …\nAllows negative numbers to pass as values.\nAdds an argument to this group by name\nAdds an argument to the list of valid possibilities.\nCreate an <code>Arg</code> from a usage string.\nExit gracefully if no arguments are present (e.g. <code>$ myprog</code>…\nAdds multiple arguments to this group by name\nAdds multiple arguments to the list of valid possibilities.\nSpecifies that use of an argument prevents the use of …\nReplace prior occurrences of arguments rather than error\nCheck if any <code>Arg</code>s were present on the command line\nGet the raw string of the <code>Id</code>\nAppend to <code>Command</code> so it can instantiate <code>Self</code> via …\nAppend to <code>Command</code> so it can instantiate <code>self</code> via …\nAppend to <code>Command</code> so it can instantiate <code>Self</code> via …\nAppend to <code>Command</code> so it can instantiate <code>self</code> via …\nSets the author(s) for the help message.\nFree-form help text for before auto-generated short help (…\nFree-form help text for before auto-generated long help (…\nOverrides the runtime-determined name of the binary for …\nPrepare for introspecting on all included <code>Command</code>s\nDefine <code>Command</code> line arguments\nSets when to color output.\nBuild a <code>Command</code> that can instantiate <code>Self</code>.\nRequires <code>cargo</code> feature flag to be enabled.\nBuild a <code>Command</code> that can update <code>self</code>.\nThis argument is mutually exclusive with the specified …\nSpecify an argument or group that must <strong>not</strong> be present when …\nThis argument is mutually exclusive with the specified …\nSpecify arguments or groups that must <strong>not</strong> be present when …\nCheck if values are present for the argument or group id\nCatch problems earlier in the development cycle.\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when the flag is present but no …\nValue for the argument when not present.\nSpecifies the value of the argument if <code>arg</code> has been used …\nSpecifies multiple values and conditions in the same …\nValue for the argument when not present.\nDelay initialization for parts of the <code>Command</code>\nDisables colorized help messages.\nDisables <code>-h</code> and <code>--help</code> flag.\nDisables the <code>help</code> <code>subcommand</code>.\nDisables <code>-V</code> and <code>--version</code> flag.\nOverrides the runtime-determined display name of the …\nAllows custom ordering of args within the help message.\nSet the placement of this subcommand within the help.\nDisables the automatic delimiting of values after <code>--</code> or …\nRead from <code>name</code> environment variable when argument is not …\nError reporting\nCustom error message for post-parsing validation\nThis argument must be passed alone; it conflicts with all …\nSpecifies how to parse external subcommand arguments.\nFind subcommand such that its name or one of aliases …\nFind subcommand such that its name or one of aliases …\nFlatten subcommand help into the current command’s help\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstantiate <code>Self</code> from <code>ArgMatches</code>, parsing the arguments as …\nInstantiate <code>Self</code> from <code>ArgMatches</code>, parsing the arguments as …\nParse an argument into <code>Self</code>.\nGet the help message specified via <code>Command::about</code>.\nBehavior when parsing the argument\nReturns the help heading for listing subcommands.\nReturns the help heading for listing subcommands.\nGet hidden aliases for this argument, if any\nIterate through the <em>hidden</em> aliases for this subcommand.\nGet <em>all</em> aliases for this argument, if any, both visible …\nIterate through the set of <em>all</em> the aliases for this …\nIterate through the set of <em>all</em> the long aliases for this …\nGet <em>all</em> short aliases for this argument, if any, both …\nIterate through the set of <em>all</em> the short aliases for this …\nGet a list of all arguments the given argument conflicts …\nGetters for all args. It will return a vector of <code>Id</code>\nIterate through the set of arguments.\nGet the authors of the cmd.\nReturns the help heading for listing subcommands.\nReturns the help heading for listing subcommands.\nGet the name of the binary.\nShould we color the output?\nGets the value of a specific <code>ArgAction::Count</code> flag\nGet the default values specified for this argument, if any\nGet the name of the binary.\nGet the placement within help\nGet the placement within help\nGet the environment variable name specified for this …\nConfigured parser for values passed to an external …\nGets the value of a specific <code>ArgAction::SetTrue</code> or …\nIterate through the set of groups.\nGet the help specified for this argument, if any\nGet the help heading specified for this argument, if any\nGet the name of the argument\nGet the name of the group\nGet the index of this argument, if any\nGet the long option name for this argument, if any\nGet the help message specified via <code>Command::long_about</code>.\nGet the long option name and its visible aliases, if any\nGet the long flag of the subcommand.\nGet the long help specified for this argument, if any\nGet the long version of the cmd.\nIterate over values of a specific option or positional …\nParse <code>env::args_os</code>, exiting on failure.\nParse the specified arguments, exiting on failure.\nParse <code>env::args_os</code>, exiting on failure.\nGet the name of the cmd.\nGet all known names of the cmd (i.e. primary name and …\nGet the custom section heading specified via …\nGet the number of values for this argument.\nIterate over the values passed to each occurrence of an …\nGets the value of a specific option or positional argument.\nIterate through the <em>options</em>.\nIterate through the <em>positionals</em> arguments.\nGet the names of possible values for this argument. Only …\nIterate over the original argument values.\nIterate over the original values for each occurrence of an …\nGet the short option name for this argument, if any\nGet the short option name and its visible aliases, if any\nGet the short flag of the subcommand.\nReturn the current <code>Styles</code> for the <code>Command</code>\nReturns the help heading for listing subcommands.\nReturns the subcommand value name.\nIterate through the set of subcommands, getting a …\nIterate through the set of subcommands, getting a mutable …\nGet the delimiter between multiple values\nGet the value hint of this argument\nGet the names of values for this argument.\nConfigured parser for argument values\nGet the value terminator for this argument. The …\nGet the version of the cmd.\nGet visible aliases for this argument, if any\nIterate through the <em>visible</em> aliases for this subcommand.\nIterate through the <em>visible</em> long aliases for this …\nGet visible short aliases for this argument, if any\nIterate through the <em>visible</em> short aliases for this …\nSpecifies that an argument can be matched to all child …\nThe name of the <code>ArgGroup</code> the argument belongs to.\nAdds an <code>ArgGroup</code> to the application.\nReport the <code>ArgGroup::id</code> for this set of arguments\nThe names of <code>ArgGroup</code>’s the argument belongs to.\nAdds multiple <code>ArgGroup</code>s to the <code>Command</code> at once.\nTest whether <code>Self</code> can parse a specific subcommand\nReturns <code>true</code> if this <code>Command</code> has subcommands.\nSets the description of the argument for short help (<code>-h</code>).\nPanic if help descriptions are omitted.\nOverride the current help section.\nSets the help template to be used, overriding the default …\nDo not display the argument in help message.\nSpecifies that this <code>subcommand</code> should be hidden from help …\nDo not display the default value of the argument in the …\nDo not display in help the environment variable name.\nDo not display in help any values inside the associated …\nHides an argument from long help (<code>--help</code>).\nDo not display the possible values in the help message.\nTells <code>clap</code> <em>not</em> to print possible values when displaying …\nHides an argument from short help (<code>-h</code>).\nSet the identifier used for referencing this argument in …\nSets the group name.\nIterate over <code>Arg</code> and <code>ArgGroup</code> <code>Id</code>s via <code>ArgMatches::ids</code>.\nMatch values against <code>PossibleValuesParser</code> without matching …\nTry not to fail on parse errors, like missing option …\nSpecifies the index of a positional argument <strong>starting at</strong> 1.\nThe first index of that an argument showed up.\nAll indices an argument appeared at when parsing.\nAllow partial matches of long arguments or their aliases.\nAllow partial matches of subcommand names and their aliases…\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReport whether <code>Command::allow_external_subcommands</code> is set\nReport whether <code>Arg::allow_hyphen_values</code> is set\nReport whether <code>Command::allow_missing_positional</code> is set\nReport whether <code>Arg::allow_negative_numbers</code> is set\nReport whether <code>Command::arg_required_else_help</code> is set\nReport whether <code>Command::args_conflicts_with_subcommands</code> is …\nReport whether <code>Command::disable_colored_help</code> is set\nReport whether <code>Command::disable_help_flag</code> is set\nReport whether <code>Command::disable_help_subcommand</code> is set\nReport whether <code>Command::disable_version_flag</code> is set\nReport whether <code>Command::dont_delimit_trailing_values</code> is set\nReports whether <code>Arg::exclusive</code> is set\nGet the custom section heading specified via …\nReport whether <code>Arg::global</code> is set\nReport whether <code>Arg::hide_default_value</code> is set\nReport whether <code>Arg::hide_env</code> is set\nReport whether <code>Arg::hide_env_values</code> is set\nReport whether <code>Arg::hide_long_help</code> is set\nReport whether <code>Arg::hide_possible_values</code> is set\nReport whether <code>Arg::hide</code> is set\nReport whether <code>Command::hide</code> is set\nReport whether <code>Arg::hide_short_help</code> is set\nReports whether <code>Arg::ignore_case</code> is set\nReports whether <code>Arg::last</code> is set\nReport whether <code>Command::multicall</code> is set\nReturn true if the group allows more than one of the …\nReport whether <code>Arg::next_line_help</code> is set\nReport whether <code>Command::next_line_help</code> is set\nReport whether <code>Command::no_binary_name</code> is set\nChecks whether this argument is a positional or not.\nReport whether <code>Command::propagate_version</code> is set\nReport whether <code>Arg::require_equals</code> is set\nReports whether <code>Arg::required</code> is set\nReports whether <code>ArgGroup::required</code> is set\nReport whether <code>Command::subcommand_negates_reqs</code> is set\nReport whether <code>Command::subcommand_precedence_over_arg</code> is …\nReport whether <code>Command::subcommand_required</code> is set\nReport whether <code>Arg::trailing_var_arg</code> is set\nThis arg is the last, or final, positional argument (i.e. …\nSets the long version of the argument without the …\nSets the program’s description for the long help (<code>--help</code>…\nSets the long version of the subcommand flag without the …\nAdd an alias, which functions as a “hidden” long flag …\nAdd aliases, which function as “hidden” long flag …\nSets the description of the argument for long help (<code>--help</code>…\nSets the version for the long version (<code>--version</code>) and help …\nLimit the line length for wrapping help when using the …\nMultiple-personality program dispatched on the binary name …\nAllows more than one of the <code>Arg</code>s in this group to be used. …\nAllows one to mutate an <code>Arg</code> after it’s been added to a …\nAllows one to mutate all <code>Arg</code>s after they’ve been added …\nAllows one to mutate an <code>ArgGroup</code> after it’s been added …\nAllows one to mutate a <code>Command</code> after it’s been added as …\n(Re)Sets the program’s name.\nCreate a new <code>Arg</code> with a unique name.\nCreate a <code>ArgGroup</code> using a unique name.\nCreates a new instance of an <code>Command</code>.\nChange the starting value for assigning future display …\nSet the default section heading for future args.\nRender the help on the line after the argument.\nPlaces the help string for all arguments and subcommands …\nSpecifies that the parser should not assume the first …\nSpecifies the number of arguments parsed per occurrence\nOverrides the <code>clap</code> generated help message (both <code>-h</code> and …\nOverrides the <code>clap</code> generated usage string for help and …\nSets an overridable argument.\nSets multiple mutually overridable arguments by name.\nParse from <code>std::env::args_os()</code>, exit on error.\nParse from iterator, exit on error.\n<code>Command</code> line argument parser\nReport all <code>possible_values</code>\nPrints the short help message (<code>-h</code>) to <code>io::stdout()</code>.\nPrints the long help message (<code>--help</code>) to <code>io::stdout()</code>.\nSpecifies to use the version of the current command for …\nConsume all following arguments.\nReturn values of a specific option or positional argument.\nReturn values for each occurrence of an option.\nReturns the value of a specific option or positional …\nReturn the name and <code>ArgMatches</code> of the current subcommand.\nRender the short help message (<code>-h</code>) to a <code>StyledStr</code>\nRender the long help message (<code>--help</code>) to a <code>StyledStr</code>.\nVersion message rendered as if the user ran <code>--version</code>.\nUsage statement\nVersion message rendered as if the user ran <code>-V</code>.\nRequires that options use the <code>--option=val</code> syntax\nSpecifies that the argument must be present.\nRequire an argument from the group to be present when …\nThis argument is required only if the specified <code>arg</code> is …\nSpecify this argument is required based on multiple …\nSpecify this argument is required based on multiple …\nSet this arg as required as long as the specified argument …\nSets this arg as required unless <em>all</em> of the specified …\nSets this arg as required unless <em>any</em> of the specified …\nSets an argument that is required when this one is present\nSpecify an argument or group that must be present when …\nSpecify arguments or groups that must be present when this …\nRequire another argument if this arg matches the …\nAllows multiple conditional requirements.\nSet binary name. Uses <code>&amp;mut self</code> instead of <code>self</code>.\nSets the short version of the argument without the …\nAdd an alias, which functions as a hidden short flag.\nAdd aliases, which functions as a hidden short flag.\nSets the short version of the subcommand flag without the …\nAdd an alias, which functions as  “hidden” short flag …\nAdd aliases, which function as “hidden” short flag …\nSets the <code>Styles</code> for terminal output\nAdds a subcommand to the list of valid possibilities.\nThe name and <code>ArgMatches</code> of the current subcommand.\nSets the help heading used for subcommands when printing …\nThe <code>ArgMatches</code> for the current subcommand.\nThe name of the current subcommand.\nAllows <code>subcommands</code> to override all requirements of the …\nPrevent subcommands from being consumed as an arguments …\nIf no <code>subcommand</code> is present at runtime, error and exit …\nSets the value name used for subcommands when printing …\nAdds multiple subcommands to the list of valid …\nReturns whether this action accepts values on the …\nSets the terminal width at which to wrap help messages.\nThe canonical argument value.\nThis is a “var arg” and everything that follows should …\nNon-panicking version of <code>ArgMatches::contains_id</code>\nNon-panicking version of <code>ArgMatches::get_many</code>\nParse <code>env::args_os</code>, returning a <code>clap::Result</code> on failure.\nParse the specified arguments, returning a <code>clap::Result</code> on …\nParse the specified arguments, returning a <code>clap::Result</code> on …\nNon-panicking version of <code>ArgMatches::get_occurrences</code>\nNon-panicking version of <code>ArgMatches::get_one</code>\nNon-panicking version of <code>ArgMatches::get_raw</code>\nNon-panicking version of <code>ArgMatches::get_raw_occurrences</code>\nParse from <code>std::env::args_os()</code>, return Err on error.\nParse from iterator, return Err on error.\nNon-panicking version of <code>ArgMatches::remove_many</code>\nNon-panicking version of <code>ArgMatches::remove_occurrences</code>\nNon-panicking version of <code>ArgMatches::remove_one</code>\nUpdate from iterator, return Err on error.\nUpdate from iterator, exit on error.\nAssign values from <code>ArgMatches</code> to <code>self</code>.\nAssign values from <code>ArgMatches</code> to <code>self</code>.\nAllow grouping of multiple values via a delimiter.\nProvide the shell a hint about how to complete this …\nPlaceholder for the argument’s value in the help message …\nPlaceholders for the argument’s values in the help …\nSpecify the typed behavior of the argument.\nSelect a <code>ValueParser</code> implementation from the intended type\nReport where argument value came from\nSentinel to <strong>stop</strong> parsing multiple values of a given …\nAll possible argument values, in display order.\nSets the version for the short version (<code>-V</code>) and help …\nAdd an alias, which functions as a visible long flag.\nSets a visible alias to this subcommand.\nAdd aliases, which function as visible long flags.\nSets multiple visible aliases to this subcommand.\nAdd an alias, which functions as a “visible” long flag …\nAdd aliases, which function as <em>visible</em> long flag …\nAdd an alias, which functions as a visible short flag.\nAdd aliases, which function as visible short flags.\nAdd an alias, which functions as  “visible” short flag …\nAdd aliases, which function as <em>visible</em> short flag …\nAny existing path.\nWhen encountered, store the associated value(s) in …\nThe abstract representation of a command line argument. …\nBehavior of arguments when they are encountered while …\nFamily of related arguments.\nOperations to perform on argument values\nImplementation for <code>ValueParser::bool</code>\nParse bool-like string values\nBuild a command-line interface.\nName of a command, without arguments. May be relative to …\nA single string containing a command and its arguments.\nCapture the remaining arguments as a command name and …\nWhen encountered, increment a <code>u8</code> counter starting from <code>0</code>.\nPath to a directory.\nNor argument values, or a flag\nEmail address.\nParse an <code>ValueEnum</code> value.\nDoes the argument match the specified value?\nPath to an executable file.\nParse false-like string values, everything else is <code>true</code>\nPath to a file.\nWhen encountered, display <code>Command::print_help</code>\nWhen encountered, display <code>Command::print_long_help</code>\nWhen encountered, display <code>Command::print_help</code>\nHost name of a computer. Shells usually parse <code>/etc/hosts</code> …\nConvert to the intended resettable type\nIs the argument present?\nAdapt a <code>TypedValueParser</code> from one value to another\nParse non-empty string values\nA UTF-8-encoded fixed string\nImplementation for <code>ValueParser::os_string</code>\nNone of the hints below apply. Disables shell completion …\nGenerated parser, usually <code>ValueParser</code>.\nImplementation for <code>ValueParser::path_buf</code>\nA possible value of an argument.\nVerify the value is from an enumerated set of <code>PossibleValue</code>…\nParse number that fall within a range of values\nParse number that fall within a range of values\nReset builder value\nClearable builder value\nA single argument value, the most common case for options\nWhen encountered, store the associated value(s) in …\nWhen encountered, act as if <code>&quot;false&quot;</code> was encountered on the …\nWhen encountered, act as if <code>&quot;true&quot;</code> was encountered on the …\nA UTF-8-encoded fixed string\nImplementation for <code>ValueParser::string</code>\nTerminal-styling container\nTerminal styling definitions\nAdapt a <code>TypedValueParser</code> from one value to another\nParse/validate argument values\nDefault value if hint is not specified. Follows shell …\nWhen encountered, report <code>ErrorKind::UnknownArgument</code>\nComplete web address.\nName of a local operating system user.\nOverwrite builder value\nArgument’s value type\nProvide shell with hint on how to complete an argument.\nParse/validate argument values\nRegister a type with <code>value_parser!</code>\nValues per occurrence for an argument\nWhen encountered, display <code>Command::version</code>\nSets a <em>hidden</em> alias for this argument value.\nSets multiple <em>hidden</em> aliases for this argument value.\nExtend the suggestions\nDisplay using ANSI Escape Code styling\nGet the raw string as an <code>std::ffi::OsStr</code>\nGet the raw string of the <code>Str</code>\n<code>bool</code> parser for argument values\nError heading\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nError heading\nGeneral Heading style, e.g. <code>help_heading</code>\nGet the help specified for this argument, if any\nHighlight invalid usage\nLiteral command-line syntax, e.g. <code>--help</code>\nGet the name of the argument value\nReturns all valid values of the argument value.\nDescriptions within command-line syntax, e.g. <code>value_name</code>\nUsage heading\nHighlight suggested usage\nGeneral Heading style, e.g. <code>help_heading</code>\nSets the help description of the value.\nHides this value from help and shell completions.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert to the intended resettable type\nHighlight invalid usage\nReport if <code>PossibleValue::hide</code> is set\nLiteral command-line syntax, e.g. <code>--help</code>\nAdapt a <code>TypedValueParser</code> from one value to another\nTests if the value is valid for this argument value\nMost number of values the argument accepts\nFewest number of values the argument accepts\nCustom parser for argument values\nCreate a <code>PossibleValue</code> with its name.\nCreate a range\nCreate an empty buffer\nImplementation for <code>ValueParser::string</code>\nImplementation for <code>ValueParser::os_string</code>\nImplementation for <code>ValueParser::path_buf</code>\nParse an <code>ValueEnum</code>\nVerify the value is from an enumerated set of <code>PossibleValue</code>…\nSelect full range of <code>i64</code>\nSelect full range of <code>u64</code>\nImplementation for <code>ValueParser::bool</code>\nParse false-like string values, everything else is <code>true</code>\nParse bool-like string values\nParse non-empty string values\n<code>OsString</code> parser for argument values\nParse the argument value\nParse the argument value\nParse the argument value\nParse the argument value\n<code>PathBuf</code> parser for argument values\nDescriptions within command-line syntax, e.g. <code>value_name</code>\nNo terminal styling\nReflect on enumerated value properties\nReflect on enumerated value properties\nNarrow the supported range\nNarrow the supported range\n<code>String</code> parser for argument values\nDefault terminal styling\nTerminal <code>Styles</code> for help and error output\nProvide a general suggestion\nSuggest an alternative argument\nReport whether the argument takes any values (ie is a flag)\nGet the raw string as an <code>OsString</code>\nAdapt a <code>TypedValueParser</code> from one value to another\nDescribes the content of <code>AnyValue</code>\nUsage heading\nHighlight suggested usage\nCreate the specified <code>Self::Parser</code>\nAvailable 4-bit ANSI color palette codes\n256 (8-bit) color support\n256 (8-bit) color support\nAvailable 4-bit ANSI color palette codes\nBlack: #0 (foreground code <code>30</code>, background code <code>40</code>).\nBlue: #4 (foreground code <code>34</code>, background code <code>44</code>).\nBright black: #0 (foreground code <code>90</code>, background code <code>100</code>).\nBright blue: #4 (foreground code <code>94</code>, background code <code>104</code>).\nBright cyan: #6 (foreground code <code>96</code>, background code <code>106</code>).\nBright green: #2 (foreground code <code>92</code>, background code <code>102</code>).\nBright magenta: #5 (foreground code <code>95</code>, background code <code>105</code>…\nBright red: #1 (foreground code <code>91</code>, background code <code>101</code>).\nBright white: #7 (foreground code <code>97</code>, background code <code>107</code>).\nBright yellow: #3 (foreground code <code>93</code>, background code <code>103</code>…\nAny ANSI color code scheme\nCyan: #6 (foreground code <code>36</code>, background code <code>46</code>).\nEnumerate each enabled value in <code>Effects</code>\nA set of text effects\nGreen: #2 (foreground code <code>32</code>, background code <code>42</code>).\nSwap foreground and background colors; inconsistent …\nNot widely supported. Sometimes treated as inverse or blink\nMagenta: #5 (foreground code <code>35</code>, background code <code>45</code>).\nRed: #1 (foreground code <code>31</code>, background code <code>41</code>).\nReset terminal formatting\n24-bit ANSI RGB color codes\n24-bit ANSI RGB color codes\nCharacters legible but marked as if for deletion. Not …\nANSI Text styling\nTerminal styling definitions\nStyle extensions exist for Kitty, VTE, mintty and iTerm2.\nWhite: #7 (foreground code <code>37</code>, background code <code>47</code>).\nYellow: #3 (foreground code <code>33</code>, background code <code>43</code>).\nBlue\nSet background color\nApply <code>blink</code> effect\nApply <code>bold</code> effect\nChange the color to/from bright\nReset all effects in-place\nReturns <code>true</code> if all of the effects in <code>other</code> are contained …\nApply <code>dimmed</code> effect\nSet text effects\nSet foreground color\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nLosslessly convert from <code>AnsiColor</code>\nGreen\nGet the background color\nGet the foreground color\nApply <code>hidden</code> effect\nGet the raw value\nInserts the specified effects in-place.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert to <code>AnsiColor</code> when there is a 1:1 mapping\nApply <code>invert</code> effect\nReport whether the color is bright\nCheck if no effects are enabled\nCheck if no styling is enabled\nApply <code>italic</code> effect\nIterate over enabled effects\nNo effects enabled\nNo effects enabled\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nCreate a <code>Style</code> with this as the foreground\nRed\nRemoves the specified effects in-place.\nRender the ANSI code\nRender the ANSI code\nRender the ANSI code\nRender the ANSI code for a background color\nRender the ANSI code for a background color\nRender the ANSI code for a background color\nRender the ANSI code for a background color\nRender the ANSI code for a foreground color\nRender the ANSI code for a foreground color\nRender the ANSI code for a foreground color\nRender the ANSI code for a foreground color\nRenders the relevant <code>Reset</code> code\nEnable or disable the specified effects depending on the …\nApply <code>strikethrough</code> effect\nApply <code>underline</code> effect\nSet underline color\nWrite the relevant <code>Reset</code> code\nWrite the ANSI code\nNumber of values present\nOccurs when the user provides two values which conflict …\nA single value\nSemantics for a piece of error information\nA piece of error information\nAn opaque message to the user\nRichly formatted error context\nNot a true “error” as it means <code>--help</code> or similar was …\nOccurs when either an argument or a <code>Subcommand</code> is …\nNot a true “error” as it means <code>--version</code> or similar …\nContains the error value\nCommand Line Argument Parser Error\nDefines how to format an error for displaying to the user\nCommand line argument parser kind of error\nNumber of allowed values\nRepresents a Format error (which is a part of <code>Display</code>). …\nThe cause of the error\nThe cause of the error\nOccurs when the user provides an unrecognized <code>Subcommand</code> …\nOccurs when the user provides a value containing invalid …\nRejected values\nOccurs when an <code>Arg</code> has a set of possible values, and the …\nRepresents an I/O error. Can occur when writing to <code>stderr</code> …\nReport <code>ErrorKind</code>\nMinimum number of allowed values\nOccurs when the user does not provide one or more required …\nOccurs when a subcommand is required (as defined by …\nOccurs when the user doesn’t use equals for an option …\n<code>ContextKind</code> is self-sufficient, no additional information …\nA single value\nContains the success value\nExisting arguments\nShort hand for <code>Result</code> type\nRichly formatted error context\nA single value\nMany values\nA single value\nmany value\nPotential fix for the user\nPotential fix for the user\nPotential fix for the user\nPotential fix for the user\nPotential fix for the user\nOccurs when the user provides fewer values for an argument …\nOccurs when a user provides more values for an argument …\nTrailing argument\nOccurs when a user provides a flag, option, argument or …\nA usage string\nAccepted subcommands\nAccepted values\nOccurs when the user provides a value for an argument with …\nOccurs when the user provides a different number of values …\nApply an alternative formatter to the error\nEnd-user description of the error case, where relevant\nEnd-user description of the error case, where relevant\nAdditional information to further qualify the error\nPrints the error and exits.\nReturns the exit code that <code>.exit</code> will exit the process …\nFormat the existing message with the Command’s context\nStylize the error for the terminal\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nLookup a piece of context\nInsert a piece of context\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nType of error for programmatic processing\nCreate an error with a pre-defined message\nPrints formatted and colored error to <code>stdout</code> or <code>stderr</code> …\nCreate an unformatted error\nRender the error message to a <code>StyledStr</code>.\nShould the message be written to <code>stdout</code> or not?\nApply <code>Command</code>’s formatting to the error\nContainer for parse results.\nValue was passed in on the command-line\nValue came <code>Arg::default_value</code>\nFailed to downcast <code>AnyValue</code> to the specified type\nValue came <code>Arg::env</code>\nIterate over <code>Arg</code> and <code>ArgGroup</code> <code>Id</code>s via <code>ArgMatches::ids</code>.\nIterate over indices for where an argument appeared when …\nViolation of <code>ArgMatches</code> assumptions\nIterate over raw argument values via <code>ArgMatches::get_raw</code>.\nArgument not defined in <code>Command</code>\nOrigin of the argument’s value\nIterate over multiple values for an argument via …\nIterate over multiple values for an argument via …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nType for value stored in <code>ArgMatches</code>\nThe target type to downcast to")