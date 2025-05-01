import React, { useState } from 'react';
import {
  Container, Box, Typography, Button, Paper,
  Chip, IconButton, Stack, Divider
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function App() {
  const [selectedStatement, setSelectedStatement] = useState(null);
  const statements = [
    { id: 1, text: "I am a king" },
    { id: 2, text: "Today's date is 04/23" },
    { id: 3, text: "Sun rises in the east" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h6" fontWeight="bold">2 Truths 1 Lie</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="text" href="/" sx={{ textTransform: 'none' }}>Home</Button>
          <Button variant="text" href="/create" sx={{ textTransform: 'none' }}>Create</Button>
          <Button variant="contained" href="/play" size="small" sx={{ textTransform: 'none' }}>Play</Button>
        </Stack>
      </Box>

      {/* Main content */}
      <Paper
        elevation={0}
        sx={{
          maxWidth: 900,
          mx: 'auto',
          p: 3,
          border: '1px solid #e0e0e0',
          borderRadius: 2
        }}
      >
        {/* Title with refresh */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Which is the lie?</Typography>
          <IconButton size="small"><RefreshIcon fontSize="small" /></IconButton>
        </Box>

        {/* Author chip */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>Statements by</Typography>
          <Chip
            label="Username"
            size="small"
            sx={{ bgcolor: '#3f51b5', color: 'white', borderRadius: 1 }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Select the statement you think is a lie
        </Typography>

        {/* Statements list */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          {statements.map(statement => (
            <Box
              key={statement.id}
              onClick={() => setSelectedStatement(
                selectedStatement === statement.id ? null : statement.id
              )}
              sx={{
                p: 2,
                cursor: 'pointer',
                borderBottom: '1px solid #e0e0e0',
                bgcolor: selectedStatement === statement.id ? '#f5f5f5' : 'transparent',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <Typography>{statement.text}</Typography>
            </Box>
          ))}
        </Stack>

        {/* Action button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            disabled={!selectedStatement}
            onClick={() => console.log(`Submitted: ${selectedStatement}`)}
            sx={{
              bgcolor: '#f0f0f0',
              color: 'text.primary',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#e0e0e0' }
            }}
          >
            Submit Guess
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;

