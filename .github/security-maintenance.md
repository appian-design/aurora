# Security Maintenance

Dependencies are managed with [uv](https://docs.astral.sh/uv/). `uv.lock` pins every package to an exact version with hashes, and CI installs with `uv sync --locked`, so the build fails if the lockfile is out of date.

## Routine

- **Audit dependencies for known vulnerabilities:** `uvx pip-audit`
  (last run: clean, at the uv migration)
- **Update dependencies:** `uv lock --upgrade`, then `uv run mkdocs build --strict`, then commit `uv.lock`
- **Add a dependency:** `uv add <package>` (never edit `uv.lock` by hand)

## Follow-ups

- [ ] **Run `pip-audit` in CI** so new advisories fail the build instead of relying on someone remembering.
- [ ] **Delay brand-new releases:** add `exclude-newer = "7 days"` under `[tool.uv]` in `pyproject.toml`, so a freshly published (possibly compromised) release isn't picked up immediately. Confirm the installed uv version supports relative durations; otherwise use an absolute timestamp.
- [ ] **Pin GitHub Actions to commit SHAs** in `.github/workflows/` (`actions/checkout`, `astral-sh/setup-uv`, `actions/setup-pages`, and so on) instead of version tags, and enable Dependabot (`github-actions` and `uv` ecosystems) to keep the pins current.
- [ ] **Watch the MkDocs 2.0 incompatibility:** the build warns that MkDocs 2.0 doesn't work with Material and its plugins. The lockfile currently resolves `properdocs`. Re-check before upgrading MkDocs or Material, and track the long-term plan for the docs toolchain.
