class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.string :name,                 :limit => 70,     :null => false
      t.string :email,                :limit => 70,     :null => false
      t.integer :quantity,            :default => 0,    :null => false
      t.boolean :presence_party,      :default => false
      t.boolean :presence_wedding,    :default => false

      t.timestamps
    end

    add_index :rsvps, :email, unique: true
  end
end