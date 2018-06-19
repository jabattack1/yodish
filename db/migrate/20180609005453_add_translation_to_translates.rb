class AddTranslationToTranslates < ActiveRecord::Migration[5.2]
  def change
    add_column :translates, :translation, :string
  end
end
