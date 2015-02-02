class Game < ActiveRecord::Base
has_many :wins
has_many :players ,through: :wins
end