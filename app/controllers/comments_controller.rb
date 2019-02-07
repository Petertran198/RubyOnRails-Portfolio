class CommentsController < ApplicationController
  def create
    #@comment is going to grab the current_user and build the comment .This is allowed because of the relationship between user and comment
    @comment = current_user.build(comment_params)
  end


  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end
