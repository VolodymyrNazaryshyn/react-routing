import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CreatePost } from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
import { SinglePage } from './pages/SinglePage';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

export default function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="about-us" element={<Navigate to="/about" replace />} />
                        <Route path="posts" element={<Blog />} />
                        <Route path="posts/:id" element={<SinglePage />} />
                        <Route path="posts/:id/edit" element={<EditPost />} />
                        <Route path="posts/new" element={
                            <RequireAuth>
                                <CreatePost />
                            </RequireAuth>
                        } />
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}
