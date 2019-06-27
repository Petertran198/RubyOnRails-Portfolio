class CommentsController < ApplicationController
  def create
    #@comment is going to grab the current_user and build the comment .This is allowed because of the relationship between user and comment
    @comment = current_user.comments.new(comment_params)
    respond_to do |format|
      if @comment.save!
        format.html { redirect_to blog_path(params[:blog_id]) }
      else
        format.html { redirect_to blogs_path }
      end
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:content, :blog_id, :user_id)
  end

end
