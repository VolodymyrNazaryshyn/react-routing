import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CreatePost } from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
import { SinglePage } from './pages/SinglePage';
import { NotFound } from './pages/NotFound';

import { Layout } from './components/Layout';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Blog />} />
                    <Route path="posts/:id" element={<SinglePage />} />
                    <Route path="posts/:id/edit" element={<EditPost />} />
                    <Route path="posts/new" element={<CreatePost />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}
