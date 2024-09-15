export const idlFactory = ({ IDL }) => {
  const BlogPost = IDL.Record({
    'title' : IDL.Text,
    'date' : IDL.Int,
    'description' : IDL.Text,
    'image' : IDL.Opt(IDL.Text),
  });
  return IDL.Service({
    'addPost' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Opt(IDL.Text)],
        [IDL.Vec(BlogPost)],
        [],
      ),
    'getPosts' : IDL.Func([], [IDL.Vec(BlogPost)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
