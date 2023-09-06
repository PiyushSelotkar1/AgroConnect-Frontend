import React from 'react';
import Layout from '../components/Layout/Layout';
import useCategory from '../Hooks/useCategory';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = useCategory();
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    {categories.map((c) => (<div className='col-md-6 mt-3 mb-3 gx-2 gy-3'>
                        <button className='btn btn-primary'>
                            <Link className='btn btn-primary' to={`/category/${c.slug}`}>{c.name}</Link>
                        </button>
                    </div>))}

                </div>
            </div>
        </Layout>
    );
}

export default Categories;
