// import thunk from "redux-thunk";
// import * as PostsActionCreators from "./PostsActionCreators";
// import "../../setupTests";
// import expect from "expect";
// import moxios from "moxios";
// import configureMockStore from "redux-mock-store";
// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);
// const initialState = {
//   posts: [],
//   postsLoaded: false
// };
// const postsList = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body:
//       "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//   }
// ];
// describe("Test Post Actions", () => {
//   let store;
//   beforeEach(() => {
//     moxios.install();
//     store = mockStore(initialState);
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it("Loads all posts correctly", done => {
//     moxios.wait(function() {
//       let request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: [
//           {
//             userId: 1,
//             id: 1,
//             title:
//               "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             body:
//               "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//           }
//         ]
//       });
//     });

//     const expectedActions = [
//       {
//         type: "LOAD_POSTS",
//         posts: postsList
//       },
//       {
//         type: "API_SUCCESS"
//       }
//     ];
//     return store.dispatch(PostsActionCreators.fetchPostsThunk()).then(() => {
//       const actualAction = store.getActions();
//       expect(actualAction).toEqual(expectedActions);
//       done();
//     });
//   });

//   it("Returns error action when no posts found", done => {
//     moxios.wait(function() {
//       let request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: []
//       });
//     });

//     const expectedActions = [
//       {
//         type: "API_ERROR"
//       }
//     ];
//     return store.dispatch(PostsActionCreators.fetchPostsThunk()).then(() => {
//       const actualAction = store.getActions();
//       expect(actualAction).toEqual(expectedActions);
//       done();
//     });
//   });
// });