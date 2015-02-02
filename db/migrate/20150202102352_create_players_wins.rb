class CreatePlayersWins < ActiveRecord::Migration
  def change
    create_table :wins do |t|
      t.integer :player_id
      t.integer :game_id
    end
  end
end
