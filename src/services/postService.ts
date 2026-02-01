import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from './apiClient';
import type { AxiosError } from 'axios';

// Types
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface CreatePostData {
  title: string;
  body: string;
  userId: number;
}

// API functions
const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;
};

const fetchPost = async (id: number): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await apiClient.post<Post>('/posts', data);
  return response.data;
};

const updatePost = async (id: number, data: Partial<Post>): Promise<Post> => {
  const response = await apiClient.put<Post>(`/posts/${id}`, data);
  return response.data;
};

const deletePost = async (id: number): Promise<void> => {
  await apiClient.delete(`/posts/${id}`);
};

// React Query Hooks
export const usePosts = () => {
  return useQuery<Post[], AxiosError>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery<Post, AxiosError>({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, AxiosError, CreatePostData>({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, AxiosError, { id: number; data: Partial<Post> }>({
    mutationFn: ({ id, data }) => updatePost(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['posts', variables.id] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, number>({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
