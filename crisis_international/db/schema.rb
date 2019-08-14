# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_14_000450) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "listing_name"
    t.text "listing_tagline"
    t.text "listing_desc"
    t.string "listing_industry"
    t.string "listing_category"
    t.string "listing_url_to_img"
    t.string "listing_medium"
    t.string "listing_age"
    t.string "listing_population"
    t.string "listing_language"
    t.string "listing_hours"
    t.string "listing_email"
    t.string "listing_phone"
    t.string "listing_sms"
    t.string "listing_url"
    t.string "listing_address"
    t.string "listing_city"
    t.string "listing_region"
    t.string "listing_country"
    t.string "listing_coverage"
    t.bigint "sponsor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sponsor_id"], name: "index_listings_on_sponsor_id"
  end

  create_table "sponsors", force: :cascade do |t|
    t.string "sponsor_name", null: false
    t.string "sponsor_email", null: false
    t.string "password_digest", null: false
    t.text "sponsor_tagline"
    t.string "sponsor_url_to_logo"
    t.string "sponsor_website"
    t.string "sponsor_phone"
    t.string "sponsor_address"
    t.string "sponsor_city"
    t.string "sponsor_region"
    t.string "sponsor_country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "sponsor_desc"
    t.index ["sponsor_name", "sponsor_email"], name: "index_sponsors_on_sponsor_name_and_sponsor_email", unique: true
  end

end
