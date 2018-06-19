require 'google/cloud/translate'

class InputsController < ApplicationController


	def index
		@trans = Translate.all
    	render :json => @trans
	end

  	def create	

        Translate.create({
        	name: params["input"]["name"]
        })
        # redirect_to '/'
	end

	def destroy

      chump = Translate.find_by(name: params["name"])
      chump.destroy
  	end

end


