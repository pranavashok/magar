#!/usr/bin/env ruby
 
dry_run = ARGV.delete('--dry-run')
force = ARGV.delete('--force')
 
if ARGV.empty?
  puts <<-USAGE
  minify, swiftly concat and minify JavaScript files from the command line
 
  Pass a single argument to create a .min.js version:
    $ minify jquery.myplugin.js
 
  Pass one or more files to concat and minify them - the last argument is
  always the output file:
    $ minify input.js output.js
    $ minify a.js few.js files.js output.min.js
 
  If the output file already exists you can overwrite it by using the --force.
 
  If you're not sure use --dry-run to see what'll happen.
USAGE
  exit
end
 
input, output = ARGV.length == 1 ?
  [ARGV, ARGV.first.sub(/\.js$/, '.min.js')] :
  [ARGV[0..-2], ARGV.last]
 
if (missing = input.select { |path| !File.exists?(path) }).any?
  puts "Some input files do not exist:\n  #{missing.join("  \n")}"
  exit 1
end
 
if File.exists?(output) && !force
  puts "Output file #{output} already exists, use the --force to overwrite"
  exit 1
end
 
if dry_run
  puts "#{input.inspect} => #{output}"
else
  require 'rubygems'
 
  begin
    require 'closure-compiler'
  rescue LoadError
    puts "Error loading Closure Compiler gem:\n  gem install closure-compiler"
    exit 1
  end
 
  File.open(output, 'w') do |f|
    f.write Closure::Compiler.new.compile(input.map { |file|
      File.read(file)
    }.join("\n"))
  end
end
