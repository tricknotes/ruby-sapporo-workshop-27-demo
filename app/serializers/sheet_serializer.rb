class SheetSerializer < ActiveModel::Serializer
  attributes :id, :created_at

  has_many :order_lines
end
