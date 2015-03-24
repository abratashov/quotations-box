require 'rubygems'
require 'sinatra'
require 'awesome_print'


set :public_folder, 'www'

get '/' do
  send_file 'www/index.html'
end