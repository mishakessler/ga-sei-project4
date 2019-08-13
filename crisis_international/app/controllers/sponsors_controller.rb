class SponsorsController < ApplicationController
  def index 
    @sponsors = Sponsor.all
    render json: @sponsors, include: :listings, status: :ok
  end

  def show
    @sponsor = Sponsor.find(params[:id])
    render json: @sponsor, include: :listings, status: :ok
  end

  def create
    @sponsor = Sponsor.new(sponsor_params)
    if @sponsor.save
      render json: @sponsor, status: :created
    else
      render json: { errors: @sponsor.errors }, status: :unproccessable_entity
    end
  end

  def update
    @sponsor = Sponsor.find(params[:id])
    if @sponsor.update(sponsor_params)
      render json: @sponsor, status: :ok
    else
      render json: { errors: @sponsor.errors }, status: :unproccessable_entity
    end
  end

  def destroy
    @sponsor = Sponsor.find(params[:id])
    @book.destroy
    head 204
  end

  private

  def sponsor_params
    params.require(:sponsor).permit(:sponsor_name, :sponsor_email, :password, :sponsor_tagline, :sponsor_url_to_logo, :sponsor_website, :sponsor_phone, :sponsor_address, :sponsor_city, :sponsor_region, :sponsor_country)
  end
end
