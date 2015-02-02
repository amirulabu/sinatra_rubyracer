require 'byebug'
require 'time'
enable :sessions

get '/' do
  # Look in app/views/index.erb
  @win = Win.all
  erb :index
end


get '/player/create' do
  # Look in app/views/index.erb
  erb :create
end

post '/player/create' do
  # Look in app/views/index.erb

  if params[:player2_input].nil? or params[:player1_input].nil?
    redirect'/'
  end

  name1 = params[:player1_input].capitalize
  name2 = params[:player2_input].capitalize

  if Player.where(name: name1).first.nil?
    Player.create(name: name1)
  end

  if Player.where(name: name2).first.nil?
    Player.create(name: name2)
  end
  session[:player1] = name1.to_s
  session[:player2] = name2.to_s

  redirect to '/game'
end



get '/game' do
  # Look in app/views/index.erb
  session[:start_time] = (Time.now.to_i).to_s
  erb :game
end

post '/game' do
  # Look in app/views/index.erb

  winner = params[:win_input]

  pla = Player.where(name: winner).first
  time_end = Time.now.to_i
  time_start = params[:timestart].to_i

  time = time_end - time_start

  game = Game.create(time: time)

  pla.games << game

  #byebug
  {msg: "OK"}.to_json
end