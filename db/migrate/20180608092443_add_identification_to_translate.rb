class AddIdentificationToTranslate < ActiveRecord::Migration[5.2]
  def change
    add_column :translates, :identification, :string
  end
end
