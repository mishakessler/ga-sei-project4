class ListingsController < ApplicationController
  def index 
    @listings = Listing.all
    render json: @listings, include: :sponsor, status: :ok
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing, include: :sponsor, status: :ok
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render json: @listing, status: :created
    else
      render json: { errors: @listing.errors }, status: :unproccessable_entity
    end
  end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      render json: @listing, status: :ok
    else
      render json: { errors: @listing.errors }, status: :unproccessable_entity
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @book.destroy
    head 204
  end

  private

  def listing_params
    params.require(:listing).permit(:sponsor_id, :listing_name, :listing_tagline, :listing_desc, :listing_industry, :listing_category, :listing_url_to_img, :listing_medium, :listing_age, :listing_population, :listing_language, :listing_hours, :listing_email, :listing_phone, :listing_sms, :listing_url, :listing_address, :listing_city, :listing_region, :listing_country, :listing_coverage)
  end

end
