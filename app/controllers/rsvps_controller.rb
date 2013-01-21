class RsvpsController < ApplicationController

  before_filter :logged_in, :except => [:new, :create]

  def index
    @rsvps = Rsvp.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @rsvps }
    end
  end

  def show
    @rsvp = Rsvp.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @rsvp }
    end
  end

  def new
    @rsvp = Rsvp.new
    @rsvp.presence_wedding = true
    @rsvp.presence_party = true
    @rsvp.quantity = 1

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @rsvp }
    end
  end

  def edit
    @rsvp = Rsvp.find(params[:id])
  end

  def create
    @rsvp = Rsvp.new(params[:rsvp])
    @name = params[:rsvp][:name]

    respond_to do |format|
      if @rsvp.save
        format.html { redirect_to new_rsvp_path, notice: 'Rsvp was successfully created.' }
        format.json { render json: @rsvp, status: :created, location: @rsvp }
      else
        format.html { render action: "new" }
        format.json { render json: @rsvp.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @rsvp = Rsvp.find(params[:id])

    respond_to do |format|
      if @rsvp.update_attributes(params[:rsvp])
        format.html { redirect_to @rsvp, notice: 'Rsvp was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @rsvp.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @rsvp = Rsvp.find(params[:id])
    @rsvp.destroy

    respond_to do |format|
      format.html { redirect_to rsvps_url }
      format.json { head :no_content }
    end
  end

  private

    def logged_in
      redirect_to new_session_path unless signed_in?
    end
end
