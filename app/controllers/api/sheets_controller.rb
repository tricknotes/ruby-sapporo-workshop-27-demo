class Api::SheetsController < Api::ApplicationController
  def index
    @sheets = Sheet.includes(:order_lines)

    render json: @sheets
  end

  def show
    @sheet = Sheet.includes(:order_lines).find(params[:id])

    render json: @sheet
  end

  def create
    @sheet = Sheet.create(sheet_params)

    render json: @sheet
  end

  def destroy
    @sheet = Sheet.find(params[:id])

    @sheet.destroy

    render json: @sheet
  end

  private

  def sheet_params
    sheet = params.require(:sheet).permit(
      :created_at,
      :order_lines => [
        :id, :product_name, :count, :unit_price
      ]
    )

    sheet[:order_lines] = sheet[:order_lines].map {|attrs|
      OrderLine.find_or_initialize_by(id: attrs[:id]) {|order_line|
        order_line.attributes = attrs
      }
    }

    sheet
  end
end
