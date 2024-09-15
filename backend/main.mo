import Func "mo:base/Func";
import Int "mo:base/Int";
import Text "mo:base/Text";

import Array "mo:base/Array";
import Time "mo:base/Time";
import Option "mo:base/Option";
import Debug "mo:base/Debug";

actor {
  // Define the BlogPost type
  public type BlogPost = {
    title: Text;
    date: Int;
    description: Text;
    image: ?Text;
  };

  // Use stable var for persistence
  stable var posts : [BlogPost] = [];

  // Function to add a new blog post
  public func addPost(title: Text, description: Text, image: ?Text) : async [BlogPost] {
    let newPost : BlogPost = {
      title = title;
      date = Time.now();
      description = description;
      image = image;
    };

    posts := Array.append<BlogPost>([newPost], posts);
    return posts;
  };

  // Function to get all posts in reverse chronological order
  public query func getPosts() : async [BlogPost] {
    Array.reverse(posts)
  };
}