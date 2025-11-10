import { http, HttpResponse } from 'msw';


export const handlers = [
  http.get('/api/quiz/calculus', async () => {
    const res = await fetch(`${window.location.origin}/calculusQ.json`);
    const data = await res.json();

    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/algebra', async () => {
    const res = await fetch(`${window.location.origin}/algebraQ.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/geometry', async () => {
    const res = await fetch(`${window.location.origin}/geometryQ.json`);
    const data = await res.json()
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/canada', async () => {
    const res = await fetch(`${window.location.origin}/canadaHistoryQ.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/japan', async () => {
    const res = await fetch(`${window.location.origin}/japanHistoryQ.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/us', async () => {
    const res = await fetch(`${window.location.origin}/usHistoryQ.json`)
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/physics', async () => {
    const res = await fetch(`${window.location.origin}/physics.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/chemistry', async () => {
    const res = await fetch(`${window.location.origin}/chemistry.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/biology', async () => {
    const res = await fetch(`${window.location.origin}/biologyQ.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/plays', async () => {
    const res = await fetch(`${window.location.origin}/plays.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/novels', async () => {
    const res = await fetch(`${window.location.origin}/novels.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
  http.get('/api/quiz/poetry', async () => {
    const res = await fetch(`${window.location.origin}/poetry.json`);
    const data = await res.json();
    return HttpResponse.json(data, { status: 200 })
  }),
];