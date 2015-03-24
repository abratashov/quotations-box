require 'rubygems'
require 'sinatra'
require 'google_translate'
require 'google_translate/version'
require 'google_translate/result_parser'
require 'awesome_print'


set :public_folder, 'www'

get '/' do
  send_file 'www/index.html'
end

get '/translate' do
  @translator = GoogleTranslate.new
  # result = @translator.translate(from_lang, to_lang, text)
  result = @translator.translate('en', 'ru', params[:text])
  result_parser = ResultParser.new result
  {translation: result_parser.translation}.to_json
end