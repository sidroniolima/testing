import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component
{
  _renderComments()
  {
    return this.props.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }

  render()
  {
    return (
      <div>
        <ul>
          {this._renderComments()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);