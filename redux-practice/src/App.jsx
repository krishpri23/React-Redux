import Counter from "./features/Counter/Counter";
import AddPostForm from "./features/Posts/AddPostForm";
import PostsList from "./features/Posts/PostsList";

function App() {
  return (
    <main className="bg-slate-200 mx-auto">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
