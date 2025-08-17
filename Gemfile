source "https://rubygems.org"

# GitHub Pages gem - this includes Jekyll and all compatible plugins
gem "github-pages", group: :jekyll_plugins

# Required for Ruby 3.0+
gem "webrick", "~> 1.7"

# Platform-specific gems for cross-platform compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
