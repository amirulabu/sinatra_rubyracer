class CreateGames < ActiveRecord::Migration
  def change
     create_table :games do |t|
      # t.time :timestart
      # t.time :timeend
      t.float :time
    end
  end
end
