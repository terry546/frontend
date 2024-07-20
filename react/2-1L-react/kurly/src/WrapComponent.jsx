import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sub1Component from './wrap/sub/Sub1Component.jsx';
import Sub2Component from './wrap/sub/Sub2Component.jsx';
import Sub3Component from './wrap/sub/Sub3Component.jsx';
import Sub4Component from './wrap/sub/Sub4Component.jsx';
import Sub5Component from './wrap/sub/Sub5Component.jsx';
import Sub6Component from './wrap/sub/Sub6Component.jsx';
import Sub7Component from './wrap/sub/Sub7Component.jsx';

export  default function  WrapComponent () {
    return(
            <div id='wrap'>
                <BrowserRouter>
                        <Routes>
                                <Route  path='/'  element={<HeaderComponent />}>                                        
                                        <Route index    element={<MainComponent />}/>
                                        <Route path='/main'    element={<MainComponent />}/>
                                        <Route path='/sub1'    element={<Sub1Component />}/>
                                        <Route path='/sub2'    element={<Sub2Component />}/>
                                        <Route path='/sub3'    element={<Sub3Component />}/>
                                        <Route path='/sub4'    element={<Sub4Component />}/>
                                        <Route path='/sub5'    element={<Sub5Component />}/>
                                        <Route path='/sub6'    element={<Sub6Component />}/>
                                        <Route path='/sub7'    element={<Sub7Component />}/>                                        
                                </Route>
                        </Routes>
                        <FooterComponent />
                 </BrowserRouter>       
            </div>
    )
}

