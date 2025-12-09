# Fix for "setRawMode EIO" Build Error

## Problem
The error `Error: setRawMode EIO` occurs when building Next.js in non-interactive environments (SSH sessions, CI/CD, or when terminal is disconnected).

## Solution

### Option 1: Use the Updated Build Script (Recommended)
The `package.json` has been updated to automatically set `CI=true`:

```bash
npm run build
```

This will run: `CI=true next build --turbopack`

### Option 2: Set Environment Variable Manually
Run the build with the `CI` environment variable:

```bash
CI=true npm run build
```

Or export it first:
```bash
export CI=true
npm run build
```

### Option 3: Use Production Build Script
For production builds, use:

```bash
npm run build:production
```

### Option 4: Use nohup or screen/tmux (For SSH Sessions)
If you're running via SSH and the connection might drop:

```bash
# Using nohup
nohup npm run build > build.log 2>&1 &

# Using screen
screen -S build
npm run build
# Press Ctrl+A then D to detach

# Using tmux
tmux new -s build
npm run build
# Press Ctrl+B then D to detach
```

## Why This Happens

Next.js sometimes tries to interact with the terminal (for prompts, progress bars, etc.). When running in:
- SSH sessions without proper TTY
- CI/CD pipelines
- Disconnected terminals
- Background processes

The terminal doesn't support `setRawMode`, causing the EIO error.

Setting `CI=true` tells Next.js to run in non-interactive mode, which prevents these terminal interactions.

## Additional Notes

- The build completed successfully before the error (`✓ Compiled successfully in 43s`)
- The error occurred after compilation, likely during cleanup or finalization
- Setting `CI=true` should prevent this issue

## Server-Specific Recommendations

For your server at `/var/www/Wyce-Website/Wyce-Website`:

1. **Always use CI mode for builds:**
   ```bash
   CI=true npm run build
   ```

2. **If using a process manager (PM2, systemd, etc.):**
   Add to your service configuration:
   ```env
   CI=true
   NODE_ENV=production
   ```

3. **For automated deployments:**
   Ensure your deployment script sets `CI=true` before building.

