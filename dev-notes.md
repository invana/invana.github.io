# Dev notes

```
brew install ruby rbenv ruby-build
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc

rbenv install 3.1.2
rbenv init
eval "$(rbenv init - zsh)"
rbenv global 3.1.2
bundle install
```