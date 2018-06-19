class CreateTranslates < ActiveRecord::Migration[5.2]
  def change
    create_table :translates do |t|
      t.string :name

      t.timestamps
    end
  end
end
