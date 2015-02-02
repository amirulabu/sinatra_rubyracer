class Player < ActiveRecord::Base
has_many :wins
has_many :games, through: :wins

end