class OrderLineSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :unit_price, :count
end
