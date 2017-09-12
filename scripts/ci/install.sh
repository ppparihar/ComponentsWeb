# Install all npm dependencies 
#travisFoldStart "npm-install"
  npm install
#travisFoldEnd "npm-install"
  npm install -g polymer-cli
# Install bower packages
#travisFoldStart "bower-install"
  bower install
#travisFoldEnd "bower-install"