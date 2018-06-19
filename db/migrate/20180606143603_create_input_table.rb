class CreateInputTable < ActiveRecord::Migration[5.2]
  def change
    create_table :input_tables do |t|
      t.string :words
    end
  end
end
