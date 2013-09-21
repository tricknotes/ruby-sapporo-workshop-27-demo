class CreateOrderLines < ActiveRecord::Migration
  def change
    create_table :order_lines do |t|
      t.string :product_name
      t.integer :unit_price
      t.integer :count
      t.references :sheet

      t.timestamps
    end
  end
end
