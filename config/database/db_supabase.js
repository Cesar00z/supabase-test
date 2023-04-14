import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yrzzhikirvyuxbzbwvko.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyenpoaWtpcnZ5dXhiemJ3dmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0OTQ1MzQsImV4cCI6MTk5NjA3MDUzNH0.VZwd2RBrzDdbqQ6g8eNSEFLYdh53ClS9Vbj8lsYJVww";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;