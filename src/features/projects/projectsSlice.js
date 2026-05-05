import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProjectsApi } from '../../services/api';

const fallbackProjects = [
  {
    id: 1,
    title: 'NMP ERP System',
    description: 'Custom billing and inventory automation for retail mobile businesses with workflow optimization and real-time analytics.',
    tech_stack: 'Django, DRF, MySQL, React, Tailwind',
    live_link: 'https://demo.nmperp.com',  // Placeholder demo link
    github_link: 'https://github.com/sufillxman/nmp-erp',
  },
  {
    id: 2,
    title: 'Instagram Clone',
    description: 'Python-powered social media clone with secure admin management and modern interface.',
    tech_stack: 'Django, DRF, Python, Bootstrap',
    live_link: 'https://demo.instagram-clone.com',  // Placeholder demo link
    github_link: 'https://github.com/sufillxman/instagram-clone',
  },
  {
    id: 3,
    title: 'UI Design Work',
    description: 'Responsive frontend interfaces for hotels, shops and companies built with Tailwind and Bootstrap.',
    tech_stack: 'HTML, CSS, JavaScript, Tailwind, Bootstrap',
    live_link: 'https://demo.ui-designs.com',  // Placeholder demo link
    github_link: 'https://github.com/sufillxman/ui-designs',
  },
];

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  try {
    const data = await fetchProjectsApi();
    return data.length > 0 ? data : fallbackProjects;
  } catch (error) {
    return fallbackProjects;
  }
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
