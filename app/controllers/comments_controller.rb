class CommentsController < ApplicationController
  def create
    #@comment is going to grab the current_user and build the comment .This is allowed because of the relationship between user and comment
    @comment = current_user.comments.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.html { redirect_to blogs_path }
      else
        format.html { redirect_to root_path }
      end
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end
