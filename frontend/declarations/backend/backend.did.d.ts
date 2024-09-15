import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface BlogPost {
  'title' : string,
  'date' : bigint,
  'description' : string,
  'image' : [] | [string],
}
export interface _SERVICE {
  'addPost' : ActorMethod<[string, string, [] | [string]], Array<BlogPost>>,
  'getPosts' : ActorMethod<[], Array<BlogPost>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
