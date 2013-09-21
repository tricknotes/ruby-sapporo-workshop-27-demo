class Api::SheetsController < ActionController::Base
  def index
    @sheets = Sheet.includes(:order_lines)

    render json: @sheets
  end
end
