import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path :'',
        pathMatch :'full',
        loadComponent:async()=> {
          return  import('./home/home').then((m)=>m.Home)
        }
    }, 
    {
        path:'jobs',
        loadComponent:async()=>  {
            return import('./jobs/jobs').then((m)=>m.Jobs)
        },
    },{
        path:'about',
        loadComponent : async() => {
            return import('./about/about').then((m)=> m.About)
        }
    },
     {
        path : 'candidates',
        loadComponent :async ()=>{
            return import('./candidates/candidates').then((m)=>m.Candidates)
        }
     },
     {
        path : 'candidate/:id',
        loadComponent : async ()=>{
            return import('./components/candidate/candidate').then((m)=>m.Candidate)
        }
     }
];
